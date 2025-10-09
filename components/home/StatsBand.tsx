import StatItem from '@/components/shared/StatItem';

const stats = [
  { value: '2009', label: 'Year Established' },
  { value: '62+', label: 'Clients' },
  { value: '236+', label: 'Projects Completed' },
];

export default function StatsBand() {
  return (
    <section className="py-16 md:py-20 bg-bg">
      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



