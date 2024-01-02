import { IndentedContainer } from "../../App.styles";
import { Carousel } from "../Carousel/Carousel";
import { ProjectsHeader } from "../ProjectsHeader/ProjectsHeader";
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
    const displayProject = (
        <div>
            <S.Img
                src="https://fastly.picsum.photos/id/153/2560/1080.jpg?hmac=61g0FjIORgpZpcyr1-sWg33Dfjo8DxBG-QPVBDuSuEc"
                alt=""
            />
            <IndentedContainer>
                <div>
                    <S.Grid>
                        <div />
                        <div>
                            <S.Index>{"/0"}</S.Index>
                            <h5>{"test"}</h5>
                            <S.Date>{"test"}</S.Date>
                            <S.Description>{"desc"}</S.Description>
                        </div>
                    </S.Grid>
                </div>
            </IndentedContainer>
        </div>
    );

    return (
        <>
            <ProjectsHeader />
            {displayProject}
            <IndentedContainer>
                {text.contentItems.map((p, idx) => {
                    return (
                        <>
                            <S.Grid>
                                <div>
                                    <S.Index>{"/0" + (idx + 1)}</S.Index>
                                    <h5>{p.name}</h5>
                                    <S.Date>{p.date}</S.Date>
                                    <S.Description>
                                        {p.description}
                                    </S.Description>
                                </div>
                                <Carousel />
                            </S.Grid>
                            <S.Line />
                        </>
                    );
                })}
            </IndentedContainer>
        </>
    );
};
