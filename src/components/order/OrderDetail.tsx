import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import CubeIcon from "@public/cube.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  HiArrowSmLeft,
  HiArrowSmRight,
  HiOutlinePlus,
  HiTrash,
} from "react-icons/hi";
import { useMutation } from "@tanstack/react-query";
import { postOrder } from "@/services/fetchOrders";

const OrderDetail: FC<{ orderDetail: object }> = ({ orderDetail }) => {
  const [collectionBox, setCollectionBox] = useState<object[]>([]);
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: (data: object) => {
      return postOrder(data);
    },
  });

  const handleAddBox = (data: object) => {
    setCollectionBox([data, ...collectionBox]);
    reset();
  };

  const handleUpdateBox = (index: number, key: string, value: string) => {
    const newCollectionBox = collectionBox.map((item: any, i: number) => {
      if (i === index) return { ...item, [key]: value };
      return item;
    });
    setCollectionBox(newCollectionBox);
  };

  const handleRemoveBox = (index: number) => {
    const newCollectionBox = collectionBox.filter(
      (item: object, i: number) => i !== index
    );
    setCollectionBox(newCollectionBox);
  };

  const handleSendOrder = () => {
    const data = {
      detail: orderDetail,
      bundle: collectionBox,
    };

    mutate(data, {
      onSuccess: () => {
        router.push("/");
      },
      onError: (err: any) => {
        console.log("An error occurred", err);
      },
    });
  };

  const handleBack = () => {
    router.push("/");
  };

  return (
    <>
      <section className="w-full p-10 flex justify-center flex-wrap gap-10">
        <div className="md:w-11/12 xl:w-8/12 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">Crea una orden</h1>
            <p className="">
              Dale una ventaja competitiva a tu negocio con entregas{" "}
              <b className="font-medium">el mismo día</b> (Área Metropolitana) y{" "}
              <b className="font-medium">el día siguiente</b> a nivel nacional.
            </p>
          </div>

          <div className="w-full flex justify-center">
            <div className="w-full bg-white p-10 pb-5 rounded-md flex flex-col gap-5">
              <form
                className="flex flex-col gap-12"
                onSubmit={handleSubmit(handleAddBox)}
              >
                <div className="flex justify-between gap-5 w-full">
                  <div className="flex flex-col gap-5 w-full">
                    <label htmlFor="">Agrega tus bultos</label>
                    <div className="bg-gray-100 w-full rounded-md flex justify-between items-center p-8 gap-5">
                      <div className="flex items-center w-3/12">
                        <span className="pr-5 min-w-12">
                          <Image
                            priority={false}
                            src={CubeIcon}
                            alt="Cube icon"
                          />
                        </span>
                        <span className="flex flex-col gap-2">
                          <label htmlFor="">Largo</label>
                          <input
                            type="text"
                            className="w-full h-10 px-2 border rounded-md rounded-r-none focus:outline-none"
                            placeholder="cm"
                            {...register("large", { required: true })}
                          />
                        </span>
                        <span className="flex flex-col gap-2">
                          <label htmlFor="">Alto</label>
                          <input
                            type="text"
                            className="w-full h-10 px-2 border border-r-0 border-l-0 rounded-md rounded-r-none rounded-l-none focus:outline-none"
                            placeholder="cm"
                            {...register("height", { required: true })}
                          />
                        </span>
                        <span className="flex flex-col gap-2">
                          <label htmlFor="">Ancho</label>
                          <input
                            type="text"
                            className="w-full h-10 px-2 border rounded-md rounded-l-none focus:outline-none"
                            placeholder="cm"
                            {...register("width", { required: true })}
                          />
                        </span>
                      </div>

                      <div className="flex items-center w-2/12">
                        <span className="flex flex-col gap-2 w-full">
                          <label htmlFor="">Peso en libras</label>
                          <input
                            type="text"
                            className="w-full h-10 px-2 border rounded-md focus:outline-none"
                            placeholder="lb"
                            {...register("weight", { required: true })}
                          />
                        </span>
                      </div>

                      <div className="flex items-center w-6/12">
                        <span className="flex flex-col gap-2 w-full">
                          <label htmlFor="">Contenido</label>
                          <input
                            type="text"
                            className="w-full h-10 px-2 border rounded-md focus:outline-none"
                            placeholder="iPhone 14 Pro"
                            {...register("content", { required: true })}
                          />
                        </span>
                      </div>
                    </div>

                    <div
                      className={`flex ${
                        collectionBox.length > 0
                          ? "justify-end"
                          : "justify-between"
                      } gap-5`}
                    >
                      {collectionBox.length === 0 && (
                        <button
                          type="button"
                          onClick={handleBack}
                          className="text-white bg-grat-700 hover:bg-gray-800 active:bg-gray-900 active:ring-4 ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-400 dark:hover:bg-gray-700 flex justify-center items-center gap-2"
                        >
                          <span>
                            <HiArrowSmLeft fontSize={18} />
                          </span>
                          Regresar
                        </button>
                      )}
                      <button
                        type="submit"
                        className="text-white bg-grat-700 hover:bg-gray-800 active:bg-gray-900 active:ring-4 ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-400 dark:hover:bg-gray-700 flex justify-center items-center gap-2"
                      >
                        Agregar{" "}
                        <span>
                          <HiOutlinePlus fontSize={18} />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="flex flex-col gap-3">
                {collectionBox?.map((item: any, i: number) => {
                  return (
                    <div
                      key={i}
                      className="border-green-400 border w-full rounded-md flex flex-col p-8 gap-5"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center w-2/12">
                          <span className="flex flex-col gap-2">
                            <label htmlFor="">Peso en libras</label>
                            <input
                              type="text"
                              value={item.weight}
                              onChange={(e) =>
                                handleUpdateBox(i, "weight", e.target.value)
                              }
                              className="w-full h-10 px-2 border rounded-md focus:outline-none"
                              placeholder="cm"
                            />
                          </span>
                        </div>

                        <div className="flex items-center w-6/12">
                          <span className="flex flex-col gap-2 w-full">
                            <label htmlFor="">Contenido</label>
                            <input
                              type="text"
                              value={item.content}
                              onChange={(e) =>
                                handleUpdateBox(i, "content", e.target.value)
                              }
                              className="w-full h-10 px-2 border rounded-md focus:outline-none"
                              placeholder="cm"
                            />
                          </span>
                        </div>

                        <div className="flex items-center w-3/12">
                          <span className="pr-5 min-w-12">
                            <Image
                              priority={false}
                              src={CubeIcon}
                              alt="Cube icon"
                            />
                          </span>
                          <span className="flex flex-col gap-2">
                            <label htmlFor="">Largo</label>
                            <input
                              type="text"
                              className="w-full h-10 px-2 border rounded-md rounded-r-none focus:outline-none"
                              placeholder="cm"
                              value={item.large}
                              onChange={(e) =>
                                handleUpdateBox(i, "large", e.target.value)
                              }
                            />
                          </span>
                          <span className="flex flex-col gap-2">
                            <label htmlFor="">Alto</label>
                            <input
                              type="text"
                              className="w-full h-10 px-2 border border-r-0 border-l-0 rounded-md rounded-r-none rounded-l-none focus:outline-none"
                              placeholder="cm"
                              value={item.height}
                              onChange={(e) =>
                                handleUpdateBox(i, "height", e.target.value)
                              }
                            />
                          </span>
                          <span className="flex flex-col gap-2">
                            <label htmlFor="">Ancho</label>
                            <input
                              type="text"
                              className="w-full h-10 px-2 border rounded-md rounded-l-none focus:outline-none"
                              placeholder="cm"
                              value={item.width}
                              onChange={(e) =>
                                handleUpdateBox(i, "width", e.target.value)
                              }
                            />
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="flex justify-end"
                        onClick={() => handleRemoveBox(i)}
                      >
                        <span>
                          <HiTrash
                            size={25}
                            style={{ color: "rgb(220, 38, 38)" }}
                          />
                        </span>
                      </button>
                    </div>
                  );
                })}
              </div>
              {collectionBox.length > 0 && (
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between gap-5">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="text-white bg-grat-700 hover:bg-gray-800 active:bg-gray-900 active:ring-4 ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-400 dark:hover:bg-gray-700 flex justify-center items-center gap-2"
                    >
                      <span>
                        <HiArrowSmLeft fontSize={18} />
                      </span>
                      Regresar
                    </button>
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 active:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 flex justify-center items-center gap-2"
                      onClick={() => handleSendOrder()}
                    >
                      Enviar{" "}
                      <span>
                        <HiArrowSmRight fontSize={18} />
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderDetail;
