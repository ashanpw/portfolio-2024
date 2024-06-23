import { ListAnimationVariants } from "../../../utils/Constants";
import { S } from "./List.styles";
import { ListProps } from "./List.types";
import { ColorTokens } from "../../../ColorTokens/ColorTokens";
import { Line } from "../Line/Line";

export const List = (props: ListProps) => {
    const { useDarkMode } = props;
    return (
        <>
            {props.contentItems.map((p, idx) => (
                <>
                    {idx === 0 && <Line useDarkMode={useDarkMode} />}
                    <S.Grid
                        initial="initial"
                        whileInView="animate"
                        variants={ListAnimationVariants}
                    >
                        <S.Label useDarkMode={useDarkMode}>{p.label}</S.Label>
                        <S.Value useDarkMode={useDarkMode}>
                            {p.url ? (
                                <S.A
                                    href={p.url}
                                    whileHover={{
                                        color: ColorTokens.tertiary,
                                    }}
                                    target="_blank"
                                >
                                    {p.value}
                                </S.A>
                            ) : (
                                p.value
                            )}
                        </S.Value>
                    </S.Grid>
                    <Line useDarkMode={useDarkMode} />
                </>
            ))}
        </>
    );
};
