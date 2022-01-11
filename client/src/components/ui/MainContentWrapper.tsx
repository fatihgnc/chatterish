const MainContentWrapper: React.FC = (props) => {
    return (
        <div className='relative w-2/3 mx-auto h-auto bg-gray-900 opacity-95 flex flex-col'>
            {props.children}
        </div>
    );
};

export default MainContentWrapper;
