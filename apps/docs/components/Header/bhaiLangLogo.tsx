import Image from 'next/image';

export default function KannadaScriptLogo() {
  return (
    <div className="relative">
      <Image
        src="/KannadaScriptlogo.png"
        alt="KannadaScript Logo"
        width={40}
        height={40}
        className="h-8 w-8 lg:h-10 lg:w-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        priority
      />
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}
