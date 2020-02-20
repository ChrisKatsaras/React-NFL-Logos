/// <reference types="react" />
import { ComponentType, SVGAttributes } from 'react';

interface Props extends SVGAttributes<SVGElement> {
  size?: string | number;
}

type Icon = ComponentType<Props>;
export const ATL: Icon;
