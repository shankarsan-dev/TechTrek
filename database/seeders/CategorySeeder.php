<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    public function run()
    {
        $categories = [
            ['name' => 'ai-ml',            'description' => 'AI & Machine Learning'],
            ['name' => 'web-dev',          'description' => 'Web Development'],
            ['name' => 'mobile-dev',       'description' => 'Mobile Development'],
            ['name' => 'data-science',     'description' => 'Data Science & Analytics'],
            ['name' => 'cybersecurity',    'description' => 'Cybersecurity'],
            ['name' => 'cloud',            'description' => 'Cloud Computing'],
            ['name' => 'blockchain-web3',  'description' => 'Blockchain & Web3'],
            ['name' => 'devops',           'description' => 'DevOps & Infrastructure'],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
