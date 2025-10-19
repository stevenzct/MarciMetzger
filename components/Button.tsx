type ButtonProps = {
  type: "button";
  title: string;
  className?: string;
  onClick?: () => void;
};

const Button = ({
  type,
  title,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`w-48 h-12 rounded-lg group bg-white inline-flex justify-center items-center px-5 py-2.5 cursor-pointer hover:bg-black hover:text-white transition-colors duration-300 ${
        className ?? ""
      }`}
      type={type}
      onClick={onClick}
    >
      <label className="font-nm-medium font-medium text-base cursor-pointer">
        {title}
      </label>
      <svg
        width="16"
        height="16"
        className="ms-2 fill-black transition-colors duration-300 group-hover:fill-white"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.7466 7.66449C13.8409 7.7575 13.8945 7.88417 13.8956 8.01667C13.8966 8.14916 13.845 8.27665 13.7521 8.37113L9.78343 12.4022C9.73804 12.4517 9.68314 12.4915 9.62203 12.5193C9.56091 12.5471 9.49482 12.5624 9.42769 12.5641C9.36057 12.5658 9.29379 12.5539 9.23133 12.5293C9.16888 12.5046 9.11204 12.4676 9.06419 12.4205C9.01634 12.3734 8.97847 12.3172 8.95284 12.2551C8.9272 12.193 8.91434 12.1264 8.915 12.0593C8.91566 11.9922 8.92983 11.9258 8.95668 11.8643C8.98353 11.8027 9.0225 11.7472 9.07127 11.7011L12.1933 8.52997L2.73357 8.60378C2.60097 8.60481 2.47339 8.55313 2.37889 8.46009C2.28439 8.36706 2.23072 8.2403 2.22969 8.10769C2.22865 7.97509 2.28034 7.8475 2.37337 7.75301C2.46641 7.65851 2.59317 7.60484 2.72577 7.60381L12.1855 7.53L9.01436 4.40798C8.96488 4.36259 8.92505 4.3077 8.89724 4.24658C8.86944 4.18546 8.85423 4.11937 8.85252 4.05224C8.85081 3.98512 8.86264 3.91834 8.8873 3.85589C8.91196 3.79343 8.94895 3.73659 8.99606 3.68874C9.04316 3.64089 9.09943 3.60302 9.16149 3.57739C9.22355 3.55176 9.29014 3.53889 9.35728 3.53955C9.42442 3.54021 9.49074 3.55438 9.55229 3.58123C9.61383 3.60808 9.66934 3.64705 9.71549 3.69582L13.7466 7.66449Z"
        />
      </svg>
    </button>
  );
};

export default Button;