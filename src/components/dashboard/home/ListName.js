const ListName = (props) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // const colors = ['green', 'blue', 'indigo', 'yellow', 'purple', 'pink'];
  // let color = Math.floor(Math.random() * (colors.length - 1));

  let date = new Date(props.list.createdAt);
  let dateString = `${
    monthNames[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()} ${date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })}`;
  return (
    <div>
      <div
        className={`cursor-pointer transition-colors	inline-block text-white hover:bg-${props.list.color}-900 bg-${props.list.color}-600 shadow-lg rounded-xl px-4 py-2 mt-2`}
      >
        <div className="font-medium text-xl">{props.list.listName}</div>
        <div className="text-sm text-gray-300">
          <span>{dateString}</span>
        </div>
      </div>
    </div>
  );
};

export default ListName;
