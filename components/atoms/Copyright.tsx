interface CopyrightProps {
  year: number;
  companyName: string;
}

export const Copyright = ({ year, companyName }: CopyrightProps) => {
  return (
    <div className={`text-sm font-secondary text-ivory-100`}>
      © {year} {companyName}. All rights reserved.
    </div>
  );
};
