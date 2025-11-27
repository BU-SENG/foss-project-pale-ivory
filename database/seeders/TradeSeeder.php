<?php

namespace Database\Seeders;

use App\Models\Trade;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TradeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $trades = [
            'Hairstyling',
            'Photography',
            'Videography',
            'Tie and Dye',
            'Soap making',
            'Catering',
        ];

        foreach ($trades as $trade) {
            Trade::firstOrCreate(['name' => $trade]);
        }
    }
}
