export interface CutStyle {
  value: string;
  label: string;
  description: string;
}

export const CUT_STYLES: CutStyle[] = [
  { value: 'whole-fillet', label: 'Whole Fillet', description: 'Skinless & boneless' },
  { value: 'half', label: 'Half', description: 'Cut into 2 pieces' },
  { value: 'three-pieces', label: 'Three Pieces', description: 'Cut into 3 pieces' },
  { value: 'circles', label: 'Circles', description: 'Cut into rounds' },
  { value: 'steaks', label: 'Steaks', description: 'Cut into steaks' },
  { value: 'ground', label: 'Ground', description: 'Ground fish' },
];

export const DEFAULT_CUT_STYLE = CUT_STYLES[0].value;

export const getCutStyleLabel = (value: string): string =>
  CUT_STYLES.find((c) => c.value === value)?.label ?? value;
