

const MsgError = ({ mensaje }) => {
    return (
        <div className="mb-5 bg-red-800 text-white text-center font-bold rounded uppercase p-3">
            <p>{mensaje}</p>
        </div>
    );
}

export default MsgError;