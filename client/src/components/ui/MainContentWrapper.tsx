const MainContentWrapper: React.FC = (props) => {
    return (
        <div className='flex-auto flex flex-col justify-center gap-10 bg-home bg-no-repeat bg-center bg-cover'>
            {props.children}
        </div>
    );
};

export default MainContentWrapper;
