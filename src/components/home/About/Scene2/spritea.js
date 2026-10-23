import * as THREE from 'three'

export class SpriteFlipbook {

    tilesHoriz = 0
    tilesVert = 0
    currentTile = 0

    map
    sprite

    constructor(spriteTexture, tilesHoriz, tilesVert, scene, wh) {

        this.tilesHoriz = tilesHoriz
        this.tilesVert = tilesVert

        // this.map = new THREE.TextureLoader().load(spriteTexture, (texture) => {
        //     texture.encoding = THREE.sRGBEncoding
        // });
        this.map = new THREE.TextureLoader().load(spriteTexture);
        this.map.colorSpace = THREE.SRGBColorSpace
        this.map.magFilter = THREE.NearestFilter;
        this.map.minFilter = THREE.NearestFilter;
        this.map.repeat.set(1 / tilesHoriz, 1 / tilesVert)

        const planeMaterial = new THREE.MeshStandardMaterial({
            side: 2,
            map: this.map,
            // alphaMap: map,
            alphaTest: 0.5, // <-- not 0.05
            // transparent: false,
            // ShadowSide: THREE.DoubleSide
            // normalMap: this.map,
            // bumpMap: map,
            // toneMapped: THREE.NoToneMapping,
            // color: new THREE.Color(0x00000000)
            // bumpScale: 2
        });

        // planeMaterial.roughness = 0//default 1 mas amarillo y se ve el color gris
        // planeMaterial.metalness = 0.1 // default 0 menos negro
        const planeGeometry = new THREE.PlaneGeometry(wh, wh);

        this.sprite = new THREE.Mesh(planeGeometry, planeMaterial);
        // let spriteMaterial = new THREE.SpriteMaterial({ map: this.map, color: 0xffffff })
        // this.sprite = new THREE.Sprite(spriteMaterial)
        // spriteMaterial.roughness = 0.9//default 1 mas amarillo y se ve el color gris
        // spriteMaterial.metalness = 0.4 // default 0 menos negro
        scene.add(this.sprite)

        this.update(0)
    }

    playSpriteIndices = [];
    runningTileArrayIndex = 0;
    maxDisplayTime = 0;
    elapsedTime = 0;

    loop(playSpriteIndices, totalDuration) {

        this.playSpriteIndices = playSpriteIndices
        this.runningTileArrayIndex = 0
        this.currentTile = this.runningTileArrayIndex
        this.maxDisplayTime = totalDuration / this.playSpriteIndices
    }

    update(delta) {
        this.elapsedTime += delta
        if (this.maxDisplayTime > 0 && this.elapsedTime >= this.maxDisplayTime) {
            this.elapsedTime = 0
            this.runningTileArrayIndex = (this.runningTileArrayIndex + 1) % this.playSpriteIndices;
            this.currentTile = this.runningTileArrayIndex;

            const offsetX = (this.currentTile % this.tilesHoriz) / this.tilesHoriz;
            const offsetY = (this.tilesVert - Math.floor(this.currentTile / this.tilesHoriz) - 1) / this.tilesVert
            this.map.offset.x = offsetX
            this.map.offset.y = offsetY
        }
    }

}