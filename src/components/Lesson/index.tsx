import { Link, useParams } from 'react-router-dom';
import { CheckCircle, Lock } from 'phosphor-react';
import { format, isPast } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import classNames from 'classnames';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson({ availableAt, slug, title, type }: LessonProps) {
  const { slug: slugParams } = useParams<{ slug: string }>();
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormat = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  })

  const isActivedLesson = slugParams === slug;

  return (
    <Link to={isLessonAvailable ? `/event/lesson/${slug}` : ''} className='group'>
      <span className="text-gray-300">
        {availableDateFormat}
      </span>
      <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors', {
        'bg-green-500': isActivedLesson,
      })}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className={classNames('text-sm text-blue-500 font-medium flex items-center gap-2', {
              'text-white': isActivedLesson,
            })}>
              <CheckCircle size={20}/>
              Conteúdo liberado
            </span>
          ): (
            <span className={classNames('text-sm text-orange-500 font-medium flex items-center gap-2', {
              'text-white': isActivedLesson,
            })}>
              <Lock size={20}/>
              Em breve
            </span>
          )}
          <span className={classNames('text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold', {
            'border-white': isActivedLesson,
          })}>
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className={classNames('text-gray-200 mt-5 block', {
          'text-white': isActivedLesson,
        })}>
          {title}
        </strong>
      </div>
    </Link>
  )
}