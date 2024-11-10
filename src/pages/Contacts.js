const Contacts = () => {
    return (
        <main className="section">
        <div className="container">
                <h1 className="title-1">Контакты</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Локация</h2>
                        <p>Пермь, Российская Федерация</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Телефон/Мессенджеры</h2>
                        <p><a href="tel:+79922265541">+7 992-226-55-41</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">E-mail</h2>
                        <p><a href="mailto:Rashit.Mukaev@mail.ru">Rashit.Mukaev@mail.ru</a></p>
                    </li>
                </ul>

        </div>
    </main>
    );
}
 
export default Contacts;