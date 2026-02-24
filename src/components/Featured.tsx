export default function Featured() {
  return (
    <div id="menu" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/exterior.png"
          alt="Блюда закусочной"
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://cdn.poehali.dev/projects/50904505-1487-4ac7-8b32-88500ce6ef5a/files/1ad3c753-ee01-4cee-9bca-fe6eb3bdf992.jpg";
          }}
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Просто и вкусно</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Борщ, котлеты, пироги и свежий чай — всё как дома. Готовим из простых продуктов
          без лишних затей, зато с душой.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Наше меню
        </button>
      </div>
    </div>
  );
}
