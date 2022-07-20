import React from 'react';
import {
    Category,
    Component,
    Variant,
    Palette,
} from '@react-buddy/ide-toolbox';
import ChakraPalette from "@react-buddy/palette-chakra-ui";

export const PaletteTree = () => (
    <Palette>
        <Category name="HTML">
            <Component name="a">
                <Variant requiredParams={['href']}>
                    <a>Link</a>
                </Variant>
            </Component>
            <Component name="button">
                <Variant>
                    <button>Button</button>
                </Variant>
            </Component>
        </Category>
        <ChakraPalette/>
    </Palette>
);
