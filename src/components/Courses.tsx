import { useEffect, useState } from 'react';
import { Clock, Users, Star, TrendingUp } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  level: string;
  price: number;
  rating: number;
  students_count: number;
  image_url: string;
}

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const categories = ['Все', 'Программирование', 'Data Science', 'Дизайн', 'Маркетинг'];

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('https://functions.poehali.dev/c8429c2b-2c0d-47c3-b007-dff8e3b0db54');
      if (response.ok) {
        const data = await response.json();
        setCourses(data);
      }
    } catch (error) {
      console.error('Ошибка загрузки курсов:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCourses =
    selectedCategory === 'Все'
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Начальный':
        return 'bg-green-100 text-green-700';
      case 'Средний':
        return 'bg-blue-100 text-blue-700';
      case 'Продвинутый':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-sm font-semibold text-primary mb-4">
            Наши курсы
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Выберите свой{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              путь обучения
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
                  : 'bg-white text-foreground hover:shadow-md border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-muted-foreground">Загрузка курсов...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image_url}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-sm font-semibold text-primary mb-2">
                    {course.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      <span>{course.students_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={16} className="fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <div className="text-2xl font-bold text-foreground">
                        {course.price.toLocaleString('ru-RU')} ₽
                      </div>
                    </div>
                    <button className="px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                      Записаться
                      <TrendingUp size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              Курсы в этой категории скоро появятся
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;