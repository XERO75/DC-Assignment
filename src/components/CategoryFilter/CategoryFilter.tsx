import React from 'react';
import Tag from '@/components/Tag';

export interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap gap-4 justify-start">
      {categories.map((category) => (
        <Tag
          key={category}
          label={category}
          onClick={() => onCategoryChange(category)}
          variant={activeCategory === category ? 'selected' : 'default'}
        />
      ))}
    </div>
  );
};

export default CategoryFilter;
