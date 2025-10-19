-- Создание таблицы курсов
CREATE TABLE IF NOT EXISTS courses (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    duration VARCHAR(50) NOT NULL,
    level VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) DEFAULT 0,
    rating DECIMAL(3, 2) DEFAULT 0,
    students_count INTEGER DEFAULT 0,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание таблицы преподавателей
CREATE TABLE IF NOT EXISTS teachers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    specialty VARCHAR(255) NOT NULL,
    bio TEXT,
    avatar_url TEXT,
    rating DECIMAL(3, 2) DEFAULT 0,
    students_count INTEGER DEFAULT 0,
    courses_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание таблицы заявок с контактной формы
CREATE TABLE IF NOT EXISTS contact_requests (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Вставка тестовых данных для курсов
INSERT INTO courses (title, description, category, duration, level, price, rating, students_count, image_url) VALUES
('Веб-разработка с нуля', 'Полный курс по созданию современных веб-сайтов с использованием HTML, CSS, JavaScript и React', 'Программирование', '3 месяца', 'Начальный', 15990, 4.8, 1234, 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600'),
('Python для Data Science', 'Изучите Python, pandas, numpy и машинное обучение для анализа данных', 'Data Science', '4 месяца', 'Средний', 19990, 4.9, 856, 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600'),
('UX/UI Дизайн', 'Создавайте красивые и удобные интерфейсы с помощью Figma и современных подходов', 'Дизайн', '2 месяца', 'Начальный', 12990, 4.7, 692, 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600'),
('Digital-маркетинг', 'Освойте SEO, контекстную рекламу, SMM и аналитику для продвижения бизнеса', 'Маркетинг', '2.5 месяца', 'Начальный', 14990, 4.6, 543, 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600'),
('JavaScript Advanced', 'Углубленное изучение JavaScript: асинхронность, ООП, паттерны проектирования', 'Программирование', '3 месяца', 'Продвинутый', 17990, 4.9, 421, 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=600'),
('Мобильная разработка', 'Создание iOS и Android приложений с помощью React Native', 'Программирование', '4 месяца', 'Средний', 21990, 4.8, 378, 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600');

-- Вставка тестовых данных для преподавателей
INSERT INTO teachers (name, specialty, bio, avatar_url, rating, students_count, courses_count) VALUES
('Алексей Смирнов', 'Fullstack Developer', 'Более 10 лет опыта в веб-разработке. Работал в Google и Яндекс', 'https://i.pravatar.cc/300?img=12', 4.9, 2145, 5),
('Мария Петрова', 'Data Scientist', 'Эксперт в машинном обучении и анализе данных. PhD в Computer Science', 'https://i.pravatar.cc/300?img=5', 4.8, 1687, 4),
('Дмитрий Иванов', 'UX/UI Designer', 'Ведущий дизайнер с опытом работы в крупных IT-компаниях', 'https://i.pravatar.cc/300?img=13', 4.7, 1234, 3),
('Елена Васильева', 'Marketing Expert', 'Специалист по digital-маркетингу с 8-летним опытом', 'https://i.pravatar.cc/300?img=9', 4.6, 987, 3),
('Сергей Козлов', 'Mobile Developer', 'Разработчик мобильных приложений, создал более 50 успешных проектов', 'https://i.pravatar.cc/300?img=15', 4.8, 756, 2);