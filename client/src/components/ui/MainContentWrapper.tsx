const MainContentWrapper: React.FC<{ bg: string }> = (props) => {
    return (
        <div
            className={`relative w-2/3 mx-auto h-auto max-h-[80vh] ${props.bg} opacity-95 flex flex-col`}>
            {props.children}
        </div>
    );
};

export default MainContentWrapper;
