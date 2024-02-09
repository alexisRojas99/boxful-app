import { useForm } from "react-hook-form";
import CalendarIcon from "@public/calendar.svg";
import LocationIcon from "@public/location.svg";
import Image from "next/image";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input/react-hook-form";
import { HiArrowSmRight } from "react-icons/hi";
import { useRouter } from "next/router";

const Order = () => {
  const { control, register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = (data: any) => {
    router.push({
      pathname: "/order-detail",
      query: data,
    });
  };

  return (
    <>
      <section className="w-full p-10 flex justify-center flex-wrap gap-10">
        <div className="md:w-10/12 xl:w-8/12 2xl:w-7/12 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">Crea una orden</h1>
            <p className="">
              Dale una ventaja competitiva a tu negocio con entregas{" "}
              <b className="font-medium">el mismo día</b> (Área Metropolitana) y{" "}
              <b className="font-medium">el día siguiente</b> a nivel nacional.
            </p>
          </div>

          <div className="w-full flex justify-center">
            <div className="w-full bg-white p-10 pt-16 pb-5 rounded-md">
              <form
                className="flex flex-col gap-12"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex justify-between gap-5 w-full">
                  <div className="flex flex-col gap-5 w-8/12">
                    <label htmlFor="">📍 Dirección de recolección</label>
                    <input
                      type="text"
                      className="w-full h-10 px-2 border rounded-md focus:outline-none"
                      placeholder="Dirección"
                      {...register("collection_address", { required: true })}
                    />
                  </div>
                  <div className="flex flex-col gap-5 w-4/12">
                    <label htmlFor="">📅 Fecha Programada</label>
                    <span className="flex flex-row">
                      <span className="bg-slate-200 border-r-0 p-2 rounded-md rounded-r-none">
                        <Image
                          priority={false}
                          src={CalendarIcon}
                          alt="Calendar icon"
                        />
                      </span>
                      <input
                        type="date"
                        className="w-full h-10 px-2 border border-l-0 rounded-md rounded-l-none focus:outline-none"
                        {...register("date", { required: true })}
                      />
                    </span>
                  </div>
                </div>

                <div className="flex justify-between gap-5 w-full">
                  <div className="flex flex-col gap-2 w-4/12">
                    <label htmlFor="">Nombres</label>
                    <input
                      type="text"
                      className="w-full h-10 px-2 border rounded-md focus:outline-none"
                      placeholder="Nombres"
                      {...register("fullname", { required: true })}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-4/12">
                    <label htmlFor="">Apellidos</label>
                    <input
                      type="text"
                      className="w-full h-10 px-2 border rounded-md focus:outline-none"
                      placeholder="Apellidos"
                      {...register("fulllastname", { required: true })}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-4/12">
                    <label htmlFor="">Correo Electrónico</label>
                    <input
                      type="text"
                      className="w-full h-10 px-2 border rounded-md focus:outline-none"
                      placeholder="example@gmail.com"
                      {...register("email", { required: true })}
                    />
                  </div>
                </div>

                <div className="flex justify-between gap-5 w-full">
                  <div className="flex flex-col gap-2 w-4/12">
                    <label htmlFor="">Teléfono</label>
                    <PhoneInput
                      defaultCountry="SV"
                      name="phone"
                      control={control}
                      className="w-full h-10 border rounded-md focus:outline-none"
                      placeholder="0000 0000"
                      rules={{ required: true }}
                      limitMaxLength={true}
                      initialValueFormat="national"
                    />
                  </div>

                  <span className="flex items-end border-r-0 p-1 pb-2 rounded-md rounded-r-none">
                    <Image
                      priority={false}
                      src={LocationIcon}
                      alt="Location icon"
                    />
                  </span>

                  <div className="flex flex-col gap-2 w-8/12">
                    <label htmlFor="">Dirección del destinatario</label>
                    <input
                      type="text"
                      className="w-full h-10 px-2 border rounded-md focus:outline-none"
                      placeholder="Final 49 Av. Sur y Bulevar Los Próceres, Smartcenter, Bodega #8, San Salvador."
                      {...register("recipient_address", { required: true })}
                    />
                  </div>
                </div>

                <div className="flex justify-between gap-5 w-full">
                  <div className="flex flex-col gap-2 w-4/12">
                    <label htmlFor="">Departamento</label>
                    <input
                      type="text"
                      className="w-full h-10 px-2 border rounded-md focus:outline-none"
                      placeholder="Departamento"
                      {...register("department", { required: true })}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-4/12">
                    <label htmlFor="">Municipio</label>
                    <input
                      type="text"
                      className="w-full h-10 px-2 border rounded-md focus:outline-none"
                      placeholder="Municipio"
                      {...register("municipality", { required: true })}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-4/12">
                    <label htmlFor="">Punto de referencia</label>
                    <input
                      type="text"
                      className="w-full h-10 px-2 border rounded-md focus:outline-none"
                      placeholder="Col. Escalón, Súper Selectos, San Salvador."
                      {...register("reference_point", { required: true })}
                    />
                  </div>
                </div>

                <div className="flex justify-between gap-5 w-full">
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="">Indicaciones</label>
                    <input
                      type="text"
                      className="w-full h-10 px-2 border rounded-md focus:outline-none"
                      placeholder="Llamar antes de llegar."
                      {...register("indications")}
                    />
                  </div>
                </div>

                <div className="flex justify-end items-center gap-5 w-full">
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 active:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 flex justify-center items-center gap-2"
                  >
                    Siguiente{" "}
                    <span>
                      <HiArrowSmRight fontSize={18} />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;
