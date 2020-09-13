export interface SkinTypeProps {
  id: string;
  name: string;
  image: {
    type: string;
    data: any;
  };
}

export type SkinTypeArrayProps = SkinTypeProps[];
