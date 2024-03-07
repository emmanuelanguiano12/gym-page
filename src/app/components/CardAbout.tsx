export const CardAbout = () => {
  return (
    <>
        <div className="mb-16 text-center">
        <h2 className="mb-4 text-center text-2xl text-white font-bold md:text-4xl">
          Nuestra meta
        </h2>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative flex w-full max-w-[70rem] flex-row rounded-xl bg-clip-border text-white shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img
              src="https://www.dir.cat/blog/wp-content/uploads/2019/08/entrenamiento-nutricion-conseguir-objetivos-gimnasio.jpg"
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-blac antialiased">
                En fitness, estamos comprometidos con tu bienestar físico y
                mental. Desde nuestra fundación en 2023, hemos sido
                un faro de la comunidad, brindando un espacio acogedor y motivador
                para personas de todas las edades y niveles de condición física.
                Nuestra misión es simple pero poderosa: inspirar y capacitar a
                cada individuo para que alcance su máximo potencial de salud y
                fitness.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
