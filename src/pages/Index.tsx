import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Logo from "@/components/Logo";
import TechBackground from "@/components/TechBackground";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
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
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Animated particle network background */}
      <TechBackground />
      
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-cyan-200/10 rounded-full blur-3xl" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Binary code rain effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5 select-none overflow-hidden">
        <div className="absolute animate-scroll-slow text-xs font-mono text-primary whitespace-pre leading-6">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} style={{ marginLeft: `${i * 40}px` }}>
              {Array.from({ length: 100 }).map(() => Math.random() > 0.5 ? '1' : '0').join('')}
            </div>
          ))}
        </div>
      </div>
      
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm z-50">
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            <Logo className="hover:opacity-80 transition-opacity cursor-pointer scale-90 sm:scale-100" />
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-1">
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
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    activeSection === item.id 
                      ? "bg-primary text-white shadow-md" 
                      : "text-gray-700 hover:bg-gray-100 hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button className="hidden lg:block shadow-lg hover:shadow-xl transition-shadow">Связаться</Button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Меню"
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={28} className="text-gray-700" />
            </button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg py-4">
              <div className="flex flex-col gap-2 px-4">
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
                    className={`px-4 py-3 text-base font-semibold rounded-lg transition-all text-left ${
                      activeSection === item.id 
                        ? "bg-primary text-white shadow-md" 
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <Button className="w-full mt-2" onClick={() => scrollToSection('contact')}>Связаться</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in relative z-10">
            <div className="inline-block mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 bg-primary/20 px-5 sm:px-7 py-3 sm:py-4 rounded-full border-2 border-primary/40 shadow-lg">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-primary font-bold text-base sm:text-lg">Инновации в IT</span>
              </div>
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-heading font-extrabold mb-6 sm:mb-8 bg-gradient-to-r from-[#0EA5E9] via-[#0284c7] to-[#0369a1] bg-clip-text text-transparent leading-tight drop-shadow-sm px-2">
              Технологии будущего
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-900 mb-10 sm:mb-12 max-w-3xl mx-auto font-extrabold leading-relaxed px-4">
              Создаём инновационные IT-решения, которые трансформируют бизнес
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center px-4 max-w-xl mx-auto">
              <Button size="lg" className="group shadow-2xl hover:shadow-primary/50 transition-all text-lg sm:text-xl px-10 py-7 sm:py-8 font-bold w-full sm:w-auto"></Button>
              <Button size="lg" variant="outline" className="shadow-xl hover:shadow-2xl transition-all text-lg sm:text-xl px-10 py-7 sm:py-8 border-2 border-gray-800 hover:bg-gray-50 font-bold text-gray-900 w-full sm:w-auto">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="technologies" className="py-16 sm:py-24 px-4 sm:px-6 bg-white relative">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent px-4">Технологии</h2>
            <p className="text-center text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto px-4 font-semibold">
              Используем современный стек технологий для создания надёжных решений
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {technologies.map((tech, index) => (
              <Card
                key={tech.name}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 bg-gradient-to-br from-white to-blue-50/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-7">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg">
                    <Icon name={tech.icon as any} className="text-white" size={26} />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2 text-gray-800">{tech.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-blue-50/50 to-white relative">
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent px-4">Услуги</h2>
            <p className="text-center text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto px-4 font-semibold">
              Полный спектр услуг для цифровой трансформации вашего бизнеса
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 bg-white hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg">
                      <Icon name={service.icon as any} className="text-white" size={30} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold mb-3 text-gray-800">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-base">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 bg-white relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-8 sm:mb-10 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent px-4">О компании</h2>
          <p className="text-lg sm:text-xl text-gray-800 leading-relaxed mb-6 sm:mb-8 font-bold px-4">
            Новология — это команда экспертов, объединённых общей целью: создавать технологические
            решения, которые меняют мир к лучшему. Мы специализируемся на разработке современных
            веб-приложений, мобильных платформ и облачных систем.
          </p>
          <p className="text-lg sm:text-xl text-gray-800 leading-relaxed font-bold px-4">
            Наш подход основан на глубоком понимании бизнес-процессов клиента и использовании
            передовых технологий для достижения максимальной эффективности.
          </p>
        </div>
      </section>

      <section id="team" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-white to-blue-50/50 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent px-4">Наша команда</h2>
            <p className="text-center text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto px-4 font-semibold">
              Профессионалы, которые воплощают идеи в реальность
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {team.map((member, index) => (
              <Card
                key={member.name}
                className="text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 hover:border-primary/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-7">
                  <div className="text-7xl mb-5">{member.avatar}</div>
                  <h3 className="text-xl font-heading font-bold mb-2 text-gray-800">{member.name}</h3>
                  <p className="text-primary font-semibold text-sm">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-white relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-heading font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent px-4">Контакты</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-10 font-medium px-4">
            Готовы обсудить ваш проект? Свяжитесь с нами удобным способом
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center mb-8 sm:mb-10">
            <Card className="flex-1 hover:shadow-xl transition-all border-2 hover:border-primary/50">
              <CardContent className="p-7 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-white" size={24} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-500 font-semibold mb-1">Email</p>
                  <p className="font-bold text-gray-800">info@novologiya.ru</p>
                </div>
              </CardContent>
            </Card>
            <Card className="flex-1 hover:shadow-xl transition-all border-2 hover:border-primary/50">
              <CardContent className="p-7 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-white" size={24} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-500 font-semibold mb-1">Телефон</p>
                  <p className="font-bold text-gray-800">+7 (495) 123-45-67</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <Button size="lg" className="group shadow-xl hover:shadow-2xl transition-all text-base px-8">
            Написать нам
            <Icon name="Send" className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary via-blue-500 to-secondary text-white py-8 sm:py-12 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black/5" />
        <div className="container mx-auto text-center relative z-10">
          <Logo className="mx-auto mb-3 sm:mb-4 brightness-0 invert scale-90 sm:scale-100" />
          <p className="text-sm sm:text-base opacity-95 font-medium">
            © 2025 Новология. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;