import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const technologies = [
    { name: "React", icon: "Blocks", description: "Современные интерфейсы" },
    { name: "TypeScript", icon: "Code2", description: "Типобезопасность" },
    { name: "Node.js", icon: "Server", description: "Серверные решения" },
    { name: "PostgreSQL", icon: "Database", description: "Надёжные БД" },
    { name: "AWS Cloud", icon: "Cloud", description: "Облачная инфраструктура" },
    { name: "Docker", icon: "Container", description: "Контейнеризация" },
  ];

  const services = [
    {
      title: "Веб-разработка",
      icon: "Globe",
      description: "Создание современных веб-приложений с использованием передовых технологий",
    },
    {
      title: "Мобильные приложения",
      icon: "Smartphone",
      description: "Разработка кроссплатформенных мобильных решений для iOS и Android",
    },
    {
      title: "Облачные решения",
      icon: "CloudCog",
      description: "Проектирование и внедрение масштабируемой облачной инфраструктуры",
    },
    {
      title: "Консалтинг",
      icon: "Lightbulb",
      description: "Экспертная помощь в выборе оптимальных технологических решений",
    },
  ];

  const team = [
    { name: "Алексей Иванов", role: "Tech Lead", avatar: "👨‍💻" },
    { name: "Мария Петрова", role: "Frontend Developer", avatar: "👩‍💻" },
    { name: "Дмитрий Сидоров", role: "Backend Developer", avatar: "👨‍💼" },
    { name: "Анна Козлова", role: "UI/UX Designer", avatar: "👩‍🎨" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Новология
            </div>
            <div className="hidden md:flex gap-8">
              {[
                { id: "home", label: "Главная" },
                { id: "technologies", label: "Технологии" },
                { id: "services", label: "Услуги" },
                { id: "about", label: "О компании" },
                { id: "team", label: "Команда" },
                { id: "contact", label: "Контакты" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? "text-primary" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button className="hidden md:block">Связаться</Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-blue-500 to-secondary bg-clip-text text-transparent">
              Технологии будущего
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Создаём инновационные IT-решения, которые трансформируют бизнес
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="group">
                Начать проект
                <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="technologies" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Технологии</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Используем современный стек технологий для создания надёжных решений
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card
                key={tech.name}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={tech.icon as any} className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-gradient-to-br from-blue-50/50 to-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Услуги</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Полный спектр услуг для цифровой трансформации вашего бизнеса
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon name={service.icon as any} className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-semibold mb-3">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">О компании</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Новология — это команда экспертов, объединённых общей целью: создавать технологические
            решения, которые меняют мир к лучшему. Мы специализируемся на разработке современных
            веб-приложений, мобильных платформ и облачных систем.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Наш подход основан на глубоком понимании бизнес-процессов клиента и использовании
            передовых технологий для достижения максимальной эффективности.
          </p>
        </div>
      </section>

      <section id="team" className="py-20 px-6 bg-gradient-to-br from-white to-blue-50/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Наша команда</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Профессионалы, которые воплощают идеи в реальность
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card
                key={member.name}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-heading font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">Контакты</h2>
          <p className="text-lg text-gray-600 mb-8">
            Готовы обсудить ваш проект? Свяжитесь с нами удобным способом
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <Card className="flex-1">
              <CardContent className="p-6 flex items-center gap-3">
                <Icon name="Mail" className="text-primary" size={24} />
                <div className="text-left">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">info@novologiya.ru</p>
                </div>
              </CardContent>
            </Card>
            <Card className="flex-1">
              <CardContent className="p-6 flex items-center gap-3">
                <Icon name="Phone" className="text-primary" size={24} />
                <div className="text-left">
                  <p className="text-sm text-gray-500">Телефон</p>
                  <p className="font-medium">+7 (495) 123-45-67</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <Button size="lg" className="group">
            Написать нам
            <Icon name="Send" className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary to-secondary text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-sm opacity-90">
            © 2025 Новология. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
