import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const TeamSection = () => {
  const players = [
    {
      nickname: "FlashMaster",
      realName: "Александр Петров",
      role: "Entry Fragger",
      country: "RU",
      rating: "1.24",
      kd: "1.18",
    },
    {
      nickname: "SteelBrain",
      realName: "Дмитрий Козлов",
      role: "IGL",
      country: "RU",
      rating: "1.19",
      kd: "1.05",
    },
    {
      nickname: "SnipeGod",
      realName: "Максим Волков",
      role: "AWPer",
      country: "RU",
      rating: "1.31",
      kd: "1.42",
    },
    {
      nickname: "ClutchKing",
      realName: "Артём Соколов",
      role: "Support",
      country: "RU",
      rating: "1.16",
      kd: "1.12",
    },
    {
      nickname: "AimBot",
      realName: "Никита Морозов",
      role: "Rifler",
      country: "RU",
      rating: "1.28",
      kd: "1.35",
    },
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-['Montserrat']">
            Состав команды
          </h2>
          <p className="text-slate-300 text-lg font-['Open_Sans']">
            Пять профессионалов, один путь к победе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {players.map((player, index) => (
            <Card
              key={index}
              className="bg-slate-700 border-slate-600 hover:border-purple-500 transition-colors"
            >
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" className="text-white" size={32} />
                </div>

                <h3 className="text-xl font-bold text-white mb-1 font-['Montserrat']">
                  {player.nickname}
                </h3>
                <p className="text-slate-400 text-sm mb-2 font-['Open_Sans']">
                  {player.realName}
                </p>

                <Badge
                  variant="secondary"
                  className="bg-purple-600 text-white mb-4"
                >
                  {player.role}
                </Badge>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Рейтинг:</span>
                    <span className="text-white font-semibold">
                      {player.rating}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">K/D:</span>
                    <span className="text-white font-semibold">
                      {player.kd}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
