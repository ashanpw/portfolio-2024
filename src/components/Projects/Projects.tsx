import { IndentedContainer } from "../../App.styles";
import { S } from "./Projects.styles";

export const Projects = () => {
    const text = {
        title: "PROJECTS",
        contentItems: [
            {
                name: "PC SETUP",
                date: "AUG - SEP 2019",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magnam assumenda est quos neque accusantium, eveniet incidunt earum beatae repudiandae dolor, labore voluptatem ducimus blanditiis vero enim libero unde dolorem!",
                mediaList: [
                    {
                        src: "https://fastly.picsum.photos/id/811/200/300.jpg?hmac=h_NbFElSb3w71ZJbJxKMQg8QNgch87Gbus_L_rsfi6g",
                        type: "img",
                    },
                ],
                mediaAlt: "",
            },
            {
                name: "PC SETUP",
                date: "AUG - SEP 2019",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magnam assumenda est quos neque accusantium, eveniet incidunt earum beatae repudiandae dolor, labore voluptatem ducimus blanditiis vero enim libero unde dolorem!",
                mediaList: [
                    {
                        src: "https://fastly.picsum.photos/id/811/200/300.jpg?hmac=h_NbFElSb3w71ZJbJxKMQg8QNgch87Gbus_L_rsfi6g",
                        type: "img",
                    },
                ],
                mediaAlt: "",
            },
            {
                name: "PC SETUP",
                date: "AUG - SEP 2019",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magnam assumenda est quos neque accusantium, eveniet incidunt earum beatae repudiandae dolor, labore voluptatem ducimus blanditiis vero enim libero unde dolorem!",
                mediaList: [
                    {
                        src: "https://fastly.picsum.photos/id/811/200/300.jpg?hmac=h_NbFElSb3w71ZJbJxKMQg8QNgch87Gbus_L_rsfi6g",
                        type: "img",
                    },
                ],
                mediaAlt: "",
            },
        ],
    };

    return (
        <>
            <h1>{text.title}</h1>
            <IndentedContainer>
                {text.contentItems.map((p, idx) => {
                    return (
                        <>
                            <S.Grid>
                                <div>
                                    <p>{"/0" + (idx + 1)}</p>
                                    <h5>{p.name}</h5>
                                    <S.Date>{p.date}</S.Date>
                                    <S.Description>
                                        {p.description}
                                    </S.Description>
                                </div>
                                <S.Img src="https://fastly.picsum.photos/id/554/1920/1080.jpg?hmac=xGriRcjdEWz3SykVN_2QvpDz2kHei6eYTV8JKXequVw" />
                            </S.Grid>
                            <S.Line />
                        </>
                    );
                })}
            </IndentedContainer>
        </>
    );
};
