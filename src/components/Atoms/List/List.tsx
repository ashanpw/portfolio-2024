import { motion } from "framer-motion";
import {
    LineAnimationVariants,
    ListAnimationVariants,
} from "../../../utils/Constants";
import { S } from "./List.styles";
import { ListProps } from "./List.types";
import { ColorTokens } from "../../../ColorTokens/ColorTokens";
import { Line } from "../Line/Line";

export const List = (props: ListProps) => {
    return (
        <>
            {props.contentItems.map((p, idx) => (
                <>
                    {idx === 0 && <Line useDarkMode={props.useDarkMode} />}
                    <S.Grid
                        initial="initial"
                        whileInView="animate"
                        variants={ListAnimationVariants}
                    >
                        <S.Label useDarkMode={props.useDarkMode}>
                            {p.label}
                        </S.Label>
                        <S.Value>
                            {p.url ? (
                                <S.A
                                    href="https://www.google.com/"
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
                    <Line useDarkMode={props.useDarkMode} />
                </>
            ))}
        </>
    );
};
