import { GraduationCap, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Актуальные знания',
      description: 'Программы обучения постоянно обновляются в соответствии с требованиями рынка',
      gradient: 'from-purple-500 to-blue-500',
    },
    {
      icon: Users,
      title: 'Опытные эксперты',
      description: 'Преподаватели с реальным опытом работы в ведущих компаниях',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Award,
      title: 'Сертификаты',
      description: 'Получайте признанные сертификаты после успешного завершения курсов',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: TrendingUp,
      title: 'Карьерный рост',
      description: 'Помогаем в трудоустройстве и развитии профессиональной карьеры',
      gradient: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-sm font-semibold text-primary mb-4">
            О платформе
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Почему выбирают{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              EduPortal
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы создали платформу, которая объединяет лучших преподавателей и мотивированных студентов для достижения карьерных целей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 p-12 rounded-3xl bg-gradient-to-r from-primary via-secondary to-accent relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
          <div className="relative text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Готовы начать обучение?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Присоединяйтесь к тысячам студентов, которые уже изменили свою жизнь
            </p>
            <button className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all">
              Выбрать курс
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
