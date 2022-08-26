import * as yup from "yup";
import { useFormik } from "formik";

export const FormAddProject = () => {

  const validationSchema = yup.object().shape({
    title: yup
      .string()
      .required("Campo Obligatorio")
      .min(4, "El minimo de caracteres es 4")
      .max(20, "El maximo de caracteres es 20"),
    description: yup
      .string()
      .max(250, "El maximo de caracteres es 250"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("first");
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { errors, values, handleChange, handleSubmit, handleBlur, touched } =
    formik;

  return (
    <form
      onSubmit={handleSubmit}
      className=" bg-white w-96 rounded py-2  flex flex-col "
    >
      <p className="text-xl text-center">Crea tu Proyecto!</p>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:border focus:outline-none focus:border-indigo-500 focus:ring-1 my-2 p-2.5 rounded"
        type="text"
        placeholder="Titulo del Proyecto"
        name="title"
        onChange={handleChange}
        value={values.title}
        onBlur={handleBlur}
      />
      {errors.title && touched.title && (
        <span className="text-sm text-red-600 pl-4">{errors.title}</span>
      )}

      <textarea
        className="max-h-32 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lgborder  focus:border focus:outline-none focus:border-indigo-500 focus:ring-1 my-2 p-2.5 rounded"
        placeholder="Descripcion"
        name="description"
        onChange={handleChange}
        value={values.description}
        onBlur={handleBlur}
      />
      {errors.description && touched.description && (
        <span className="text-sm text-red-600 pl-4">{errors.description}</span>
      )}

      <button
        className="mx-auto mt-2 w-32 hover:bg-indigo-500 hover:text-white hover:cursor-pointer p-2 border rounded bold text-indigo-500 border-indigo-500"
        type="submit"
      >
        Crear
      </button>
    </form>
  );
};
