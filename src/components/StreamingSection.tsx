import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const StreamingSection = () => {
  const streams = [
    {
      platform: "Twitch",
      streamer: "FlashMaster",
      title: "FACEIT Lvl 10 Grind | Road to FPL",
      viewers: "2.3k",
      isLive: true,
      thumbnail: "/placeholder.svg",
    },
    {
      platform: "YouTube",
      streamer: "SnipeGod",
      title: "AWP Highlights & Tips",
      viewers: "1.8k",
      isLive: true,
      thumbnail: "/placeholder.svg",
    },
    {
      platform: "Twitch",
      streamer: "SteelBrain",
      title: "Tactical Analysis & VOD Review",
      viewers: "956",
      isLive: false,
      thumbnail: "/placeholder.svg",
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-['Montserrat']">
            Прямые трансляции
          </h2>
          <p className="text-slate-300 text-lg font-['Open_Sans']">
            Следите за нашими игроками в реальном времени
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {streams.map((stream, index) => (
            <Card
              key={index}
              className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-colors overflow-hidden"
            >
              <div className="relative">
                <img
                  src={stream.thumbnail}
                  alt={stream.title}
                  className="w-full h-48 object-cover"
                />
                {stream.isLive && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                    LIVE
                  </div>
                )}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center">
                  <Icon name="Users" size={14} className="mr-1" />
                  {stream.viewers}
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Icon
                      name={stream.platform === "Twitch" ? "Twitch" : "Youtube"}
                      className={
                        stream.platform === "Twitch"
                          ? "text-purple-500"
                          : "text-red-500"
                      }
                      size={20}
                    />
                    <span className="text-slate-400 text-sm">
                      {stream.streamer}
                    </span>
                  </div>
                  {stream.isLive && (
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  )}
                </div>
                <CardTitle className="text-white text-lg font-['Montserrat']">
                  {stream.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <Button
                  className={`w-full ${
                    stream.isLive
                      ? "bg-purple-600 hover:bg-purple-700"
                      : "bg-slate-600 hover:bg-slate-500"
                  }`}
                >
                  <Icon name="Play" className="mr-2" size={16} />
                  {stream.isLive ? "Смотреть" : "Посмотреть запись"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-slate-800 rounded-lg p-8 max-w-2xl mx-auto">
            <Icon
              name="Tv"
              className="text-purple-400 mx-auto mb-4"
              size={48}
            />
            <h3 className="text-2xl font-bold text-white mb-4 font-['Montserrat']">
              Главный стрим команды
            </h3>
            <p className="text-slate-300 mb-6 font-['Open_Sans']">
              Официальные матчи и тренировки команды NEXUS ESPORTS
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Icon name="Twitch" className="mr-2" size={16} />
                Twitch
              </Button>
              <Button
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-700"
              >
                <Icon name="Youtube" className="mr-2" size={16} />
                YouTube
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StreamingSection;
