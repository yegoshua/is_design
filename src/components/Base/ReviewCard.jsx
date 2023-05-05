import React from "react";

const ReviewCard = () => {
    return (
        <div className="bg-transparent flex flex-col mb-10 w-[620px] justify-center">
            <div className="rewiew-quote-wrapper items-start bg-white rounded-xl flex shadow-md py-[33px] px-[27px] flex-row relative">
                <img
                    className="h-[35px] mr-[20px] w-[38px]"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAjCAYAAAD48HgdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKxSURBVHgBrZjdjdpAEMfHiyV4JC+IrwdTQaADroLcVXBQQZIKDioIqSBQQUgF51TAdYAjgUA88QhIQP7jmAjt2fvh9U/izK29f8/Ozu7O4JHEcrmsViqVz/ja9zyve71eq7jucX07n8+zdrs9JUtumtB4FEIEJpre/T/b7ZYNGnFHxXsiiD1B7I0MMNXE56HRaES3BnH7stlsXtB5ohFgglKptMDzz5rnrDThwcVqtereGmKPrddrdvFPsiCZit79KCWjBrj8IAvuNWOPwahvZEniBdWLX8hB08szsnsQbz053lw1D4fDBwH3fSIH0P8xpVkbfyrK5fJAXC6XgBzgLcWkzZK+cBVB/49ym8Eq1GoKcieggoFhVfbYngrGVZM9LvhYoIJB3EbkCAf/byoYDPYXOcAeF6fTaeLievR953Fs2FNyIxKdTmcPr40pJ/DOu0HxkYL275QT2PMnXpXNZnOSVygrFKD5BZcZ5SMUktCQ/qUgxmDawqx78NwgjyYGG3ppN5Jsg48a3dES4eUdMoA1kS49c7Joopm6wbZarTmsnpOekAxhTcPVGvKfzJ3f933t4Y7MwiouDROGeCGmTiXSlgCXJakJ4fIHMsRQcwpNjslMj/VJj+0W0zd45r9mlmG67JNHFpIhXCUZakaUZRgXEKTPGKy8lZSDgeKRSNb0JKMC0sfBGCMbkSG73a6LRbJQPYP7Q7m29CWjXlUCWFXzer0+IkNYEy9VVl984qQVvEIyKlBo8Pn3lSyMMtE8Ho+jtBuCXW0iQFKlrMJGk5OItJs+dngWsCrfdehiykRT2P6m4EqSMWs1VcVIiMKzV6RRYIaYMhqon9bIQc45GhWIraZsWITPEAIhFUeEdOepVqtZFT33UzlOpi6kAkjqiFjT1qgY7DevyZ5TGEVo/gUG23vp2qUV8gAAAABJRU5ErkJggg=="
                    alt="quotes"
                />
                <div>
                    <p className="text-2xl">
                        Фокусируйтесь на важном для себя и получайте
                        удовольствие от жизни» - очень импонирует подход и
                        философия Самые интересные комплектации, гибкость
                        условий, не просто клиентоориентированность а развитие
                        отношений, формат клуба по интересам - мечта водителя
                        <a
                            className="Review_socialLink__N2tiJ"
                            href="#"
                            rel="noreferrer"
                        >
                        </a>
                    </p>
                </div>
            </div>
            <div className="flex mt-[35px] w-full">
                <img
                    className="rounded-full mr-[18px] h-[59px] w-[59px]"
                    src="https://drivovo.com/static/media/review-photo-1.3042b568c6db6aab619c.jpg"
                    alt="author"
                />
                <div className="Review_authorText__qKtaJ">
                    <p className="text-[20px]">Mariya Ivanova</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
