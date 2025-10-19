import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    platform: [
      { name: 'О платформе', href: '#about' },
      { name: 'Курсы', href: '#courses' },
      { name: 'Преподаватели', href: '#teachers' },
      { name: 'Контакты', href: '#contacts' },
    ],
    categories: [
      { name: 'Программирование', href: '#courses' },
      { name: 'Data Science', href: '#courses' },
      { name: 'Дизайн', href: '#courses' },
      { name: 'Маркетинг', href: '#courses' },
    ],
    info: [
      { name: 'Политика конфиденциальности', href: '#' },
      { name: 'Условия использования', href: '#' },
      { name: 'Помощь', href: '#' },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                Э
              </div>
              <span className="text-2xl font-bold">EduPortal</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Современная образовательная платформа для тех, кто стремится к развитию и новым знаниям
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={16} className="text-primary" />
                <span>info@eduportal.ru</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={16} className="text-primary" />
                <span>+7 (800) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin size={16} className="text-primary" />
                <span>Москва, ул. Тверская, 1</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Платформа</h4>
            <ul className="space-y-3">
              {links.platform.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Категории</h4>
            <ul className="space-y-3">
              {links.categories.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Информация</h4>
            <ul className="space-y-3">
              {links.info.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} EduPortal. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Telegram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                VK
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
