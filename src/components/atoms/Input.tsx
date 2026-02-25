// "use client";

// import clsx from "clsx";
// import { forwardRef, useState } from "react";
// import { Eye, EyeOff } from "@/assets/icons/icons";
// import { User, Mail, Lock } from "@/assets/icons/icons";

// interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   width?: "w-full" | "w-fit";
//   type?: "text" | "email" | "password";
// }

// const InputForm = forwardRef<HTMLInputElement, InputFormProps>(
//   (
//     {
//       type = "text",
//       placeholder,
//       value,
//       className = "mb-3",
//       onChange,
//       width = "w-full",
//       ...rest
//     },
//     ref,
//   ) => {
//     const [show, setShow] = useState(false);
//     const isPassword = type === "password";

//     const Icon =
//       type === "password"
//         ? Lock
//         : type === "email"
//           ? Mail
//           : type === "text"
//             ? User
//             : null;

//     return (
//       <div className="relative w-full">
//         {Icon && (
//           <div
//             className={clsx(
//               "absolute top-5.25 px-2 -translate-y-1/2 text-gray-400",
//             )}
//           >
//             <Icon size={18} />
//           </div>
//         )}

//         <input
//           ref={ref}
//           type={isPassword ? (show ? "text" : "password") : type}
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//           {...rest}
//           className={clsx(
//             width,
//             "bg-form h-11.25 rounded-md px-8 outline-none bg-gray-100",
//             className,
//           )}
//         />

//         {isPassword && (
//           <button
//             type="button"
//             onClick={() => setShow((prev) => !prev)}
//             className={clsx(
//               "absolute right-3 top-5.25 -translate-y-1/2 text-gray-500",
//             )}
//           >
//             {show ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         )}
//       </div>
//     );
//   },
// );

// InputForm.displayName = "InputForm";
// export default InputForm;
