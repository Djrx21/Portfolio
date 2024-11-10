import "./style.css";

const Header = () => {
    return (
    <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Здравствуйте, я <em>Рашит Мукаев</em></strong><br />
                студент группы ИПс-31
            </h1>
            <div className="header__text">
                <p>Специальность 09.02.07. Информационные системы и программирование</p>
                <p>Пермский институт (филиал) РЭУ им. Г.В. Плеханова</p>
            </div>
        </div>
    </header>
    );
}
 
export default Header;