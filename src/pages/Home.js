import Header from "./../components/header/Header";
const Home = () => {
    return (
    <>
    <Header />

        <main className="section">
            <div className="container">
    
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Освоенные дисциплины</h2>
                            <p>Архитектура аппаратных средств, Компьютерные сети</p>
                            <p>Основы алгоритмизации программирования</p>
                            <p>Разработка мобильных приложений</p>
                            <p>Разработка, поддержка и тестирование программных модулей</p>
                            <p>Операционные системы и среды</p>
                            <p>Основы проектирования баз данных</p>
                            <p>Технология разработки и защиты баз данных</p>
                            <p>Технология разработки программного обеспечения</p>
                                                        
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Языки программирования</h2>
                            <p>C#,  C++,  Java Script,  SQL,  Python</p>
                        </li>
                    </ul>
                </div>
        </main>
    </>
    );
}
 
export default Home;