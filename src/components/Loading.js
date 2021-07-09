const Loading = (props) => {
  return (
    <div
      className={
        props.inline
          ? 'inline-block'
          : `z-50 fixed inset-0 bg-white bg-opacity-75 flex justify-center items-center`
      }
    >
      <svg
        className="animate-spin inline"
        xmlns="http://www.w3.org/2000/svg"
        height={props.height || '38'}
        width={props.width || '38'}
        viewBox="0 0 38 38"
        stroke="black"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)" strokeWidth="2">
            <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
            <path d="M36 18c0-9.94-8.06-18-18-18"></path>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Loading;
