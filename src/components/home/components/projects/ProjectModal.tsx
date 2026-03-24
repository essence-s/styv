import { useState, useEffect, useCallback } from 'react';
import ProjectVideo from './ProjectVideo';
import { IconGithub } from './files/IconGithub';

interface Tech {
  name: string;
  src: string;
}

interface Buttom {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link?: string;
}

interface Project {
  slug: string;
  imgWeb: string;
  title: string;
  infoText: string;
  video?: string;
  techs: Tech[];
  buttom: Buttom;
  repository_link?: string;
}

interface ProjectModalProps {
  projects: Project[];
}

export default function ProjectModal({ projects }: ProjectModalProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setSelectedProject(null);
    window.history.pushState({}, '', window.location.pathname);
  }, []);

  const openModal = useCallback(
    (slug: string) => {
      const project = projects.find((p) => p.slug === slug);
      if (project) {
        setSelectedProject(project);
        setIsOpen(true);
      }
    },
    [projects]
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const projectSlug = params.get('project');
    if (projectSlug) {
      const card = document.querySelector(`[data-card-slug="${projectSlug}"]`);
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setTimeout(() => {
        openModal(projectSlug);
      }, 200);
    }
  }, [openModal]);

  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const slug = target.closest('[data-slug]')?.getAttribute('data-slug');
      if (slug) {
        e.preventDefault();
        const url = new URL(window.location.href);
        url.searchParams.set('project', slug);
        window.history.pushState({}, '', url);
        openModal(slug);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [openModal, closeModal, isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isOpen || !selectedProject) return null;

  console.log(selectedProject.buttom.icon);

  return (
    <>
      <style>{`
        .project-modal {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: Poppins, sans-serif;
          animation: fadeIn 0.3s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .project-modal__overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(4px);
        }

        .project-modal__container {
          position: relative;
          width: 90%;
          max-width: 1050px;
          max-height: 90vh;
          overflow-y: auto;
          background: #28292d;
          border: 1px #ffffff17 solid;
          border-radius: 12px;
          padding: 24px;
          animation: slideUp 0.3s ease forwards;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .project-modal__close {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          border-radius: 50%;
          color: #fff;
          cursor: pointer;
          transition: background 0.2s ease;
          z-index: 10;
        }

        .project-modal__close:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .project-modal__grid {
          display: grid;
          grid-template-columns: 10fr 6fr;
          gap: 24px;
        }

        .project-modal__media {
          position: relative;
        }

        .project-modal__info {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .project-modal__title {
          margin: 0 0 12px;
          font-size: 1.3rem;
          font-weight: 500;
          line-height: 1.2;
          color: #fff;
          text-transform: uppercase;
        }

        .project-modal__description {
          margin: 0 0 20px;
          font-size: 0.9rem;
          color: #c7cfdd;
        }

        .project-modal__techs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }

        .project-techs__item {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border: solid 1px #3f3f3f;
          border-radius: 20px;
          font-size: 0.8rem;
          background: linear-gradient(271deg, #ffffff12, #ffffff05);
          box-shadow: 2px 2px 3px 0px #0000001f;
          color: #cecece;
        }

        .project-techs__icon {
          width: 16px;
          height: 16px;
          display: inline-block;
        }

        .project-techs__icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .project-techs__name {
          text-transform: capitalize;
        }

        .project-modal__actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          color: white;
          flex: 1;
          justify-content: center;
          align-items: end;
        }

        .project-action-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 0.9rem;
          text-decoration: none;
          color: inherit;
          transition: background 0.3s ease;
        }

        .project-action-btn--primary {
          border: solid 1px #ffffff17;
          background: linear-gradient(90deg, #0000001c, #00000021);
          box-shadow: 2px 2px 3px 0px #0000001f;
        }

        .project-action-btn--primary:hover {
          background: linear-gradient(90deg, #00000077, #00000079);
        }

        .project-action-btn--secondary {
          background: transparent;
        }

        .project-action-btn--secondary:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .project-action-btn__icon {
          width: 16px;
          height: 16px;
        }

        .project-video {
          position: relative;
          width: 100%;
          height: 450px;
          border-radius: 8px;
          overflow: hidden;
          background: #000;
          cursor: pointer;
        }

        .project-video__image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .project-video__play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.068);
          border: none;
          border-radius: 50%;
          cursor: pointer;
          transition:
            transform 0.2s ease,
            background 0.2s ease;
          color: #dddfe7;
          backdrop-filter: blur(3px);
        }

        .project-video__play-btn:hover {
          transform: translate(-50%, -50%) scale(1.1);
        }

        @media (max-width: 768px) {
          .project-modal__container {
            padding: 16px;
            width: 95%;
          }

          .project-modal__grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .project-modal__title {
            font-size: 1.4rem;
          }

          .project-modal__actions {
            flex-direction: column;
          }

          .project-modal__actions a {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <div className='project-modal' role='dialog' aria-modal='true'>
        <div className='project-modal__overlay' onClick={handleOverlayClick} />
        <div className='project-modal__container'>
          <button
            className='project-modal__close'
            onClick={closeModal}
            aria-label='Cerrar'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <line x1='18' y1='6' x2='6' y2='18' />
              <line x1='6' y1='6' x2='18' y2='18' />
            </svg>
          </button>

          <div className='project-modal__content'>
            <div className='project-modal__grid'>
              <div className='project-modal__media'>
                <ProjectVideo
                  imageSrc={selectedProject.imgWeb}
                  videoSrc={selectedProject.video}
                  title={selectedProject.title}
                />
              </div>

              <div className='project-modal__info'>
                <h2 className='project-modal__title'>
                  {selectedProject.title}
                </h2>
                <p className='project-modal__description'>
                  {selectedProject.infoText}
                </p>

                <div className='project-modal__techs'>
                  {selectedProject.techs.map((tech, index) => (
                    <div key={index} className='project-techs__item'>
                      <span className='project-techs__icon'>
                        <img src={tech.src} alt='' />
                      </span>
                      <span className='project-techs__name'>{tech.name}</span>
                    </div>
                  ))}
                </div>

                <div className='project-modal__actions'>
                  {selectedProject.repository_link && (
                    <a
                      href={selectedProject.repository_link}
                      target='_blank'
                      rel='noreferrer'
                      className='project-action-btn'
                    >
                      <IconGithub className='project-action-btn__icon' />
                      <span>GitHub</span>
                    </a>
                  )}
                  <a
                    href={selectedProject.buttom.link}
                    target='_blank'
                    rel='noreferrer'
                    className='project-action-btn project-action-btn--primary'
                  >
                    {selectedProject.buttom.icon && (
                      <selectedProject.buttom.icon className='project-action-btn__icon' />
                    )}
                    <span>{selectedProject.buttom.title}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
