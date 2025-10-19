import { useEffect, useState } from 'react';
import { Star, BookOpen, Users } from 'lucide-react';

interface Teacher {
  id: number;
  name: string;
  specialty: string;
  bio: string;
  avatar_url: string;
  rating: number;
  students_count: number;
  courses_count: number;
}

const Teachers = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await fetch('https://functions.poehali.dev/4d7b5546-e3f3-49af-9002-e6ced630880b');
      if (response.ok) {
        const data = await response.json();
        setTeachers(data);
      }
    } catch (error) {
      console.error('Ошибка загрузки преподавателей:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="teachers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-sm font-semibold text-primary mb-4">
            Наши преподаватели
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Учитесь у{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              лучших экспертов
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Наши преподаватели — это профессионалы с многолетним опытом работы в ведущих компаниях
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-muted-foreground">Загрузка преподавателей...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <img
                      src={teacher.avatar_url}
                      alt={teacher.name}
                      className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
                    />
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      <Star size={20} className="fill-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{teacher.name}</h3>
                  <p className="text-primary font-semibold mb-3">{teacher.specialty}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {teacher.bio}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Star size={20} className="text-yellow-400 fill-yellow-400" />
                    </div>
                    <div className="text-xl font-bold">{teacher.rating}</div>
                    <div className="text-xs text-muted-foreground">Рейтинг</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Users size={20} className="text-primary" />
                    </div>
                    <div className="text-xl font-bold">{teacher.students_count}</div>
                    <div className="text-xs text-muted-foreground">Студентов</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <BookOpen size={20} className="text-secondary" />
                    </div>
                    <div className="text-xl font-bold">{teacher.courses_count}</div>
                    <div className="text-xs text-muted-foreground">Курсов</div>
                  </div>
                </div>

                <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all">
                  Смотреть курсы
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Teachers;