import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-primary border border-primary/20">
              🚀 Начни обучение сегодня
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Образование
              </span>
              <br />
              для всех
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Получите востребованную профессию онлайн. Более 100 курсов от ведущих экспертов индустрии.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2">
                Начать обучение
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <button className="px-8 py-4 bg-white text-foreground rounded-full font-semibold hover:shadow-xl transition-all flex items-center gap-2 border-2 border-gray-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <Play size={16} className="text-white fill-white ml-0.5" />
                </div>
                Смотреть видео
              </button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">15К+</div>
                <div className="text-sm text-muted-foreground">Студентов</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-foreground">100+</div>
                <div className="text-sm text-muted-foreground">Курсов</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Экспертов</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
            
            <img 
              src="https://cdn.poehali.dev/files/ee3ba7ba-c1fe-4312-8624-296e02bfea11.jpg"
              alt="Образовательная платформа"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent to-secondary"></div>
                <div>
                  <div className="font-bold text-foreground">4.9 ⭐</div>
                  <div className="text-sm text-muted-foreground">Рейтинг платформы</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
