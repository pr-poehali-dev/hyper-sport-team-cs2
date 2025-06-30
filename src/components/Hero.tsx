import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-white mb-4 font-['Montserrat']">
            NEXUS
            <span className="text-purple-400"> ESPORTS</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 font-['Open_Sans'] max-w-2xl mx-auto">
            Профессиональная киберспортивная команда по Counter-Strike 2.
            Стремимся к победе в каждом матче.
          </p>
        </div>

        <div className="flex gap-4 justify-center mb-12">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
            <Icon name="Play" className="mr-2" size={20} />
            Смотреть стрим
          </Button>
          <Button
            variant="outline"
            className="border-slate-600 text-white hover:bg-slate-700 px-8 py-3 text-lg"
          >
            О команде
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">15</div>
            <div className="text-slate-400 text-sm">Побед подряд</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">#3</div>
            <div className="text-slate-400 text-sm">В мировом рейтинге</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">5</div>
            <div className="text-slate-400 text-sm">Активных игроков</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="text-slate-400" size={24} />
      </div>
    </section>
  );
};

export default Hero;
