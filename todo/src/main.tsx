import classes from './components/Header/Header.module.scss';

export const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <a href="/" className={classes.link}>ToDo</a>
            </div>
        </header>
    );
};