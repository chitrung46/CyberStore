<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\Image;

class ProductDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {     
        $products=[
            ['name' => '[Instock] Neo65 Case',
            'manufacturer' => 'NeoStudio',
            'description' => '<p>
                                <strong>🔖Thông tin sản phẩm:</strong>
                            </p>
                            <ul>
                                <li>Maker: Neo Studio</li>
                                <li>Layout: 65%</li>
                                <li>Mounting Style:&nbsp;Gummy O-ring +&nbsp;PCB gasket Mount</li>
                                <li>Góc nghiêng:&nbsp;8°</li>
                                <li>Chiều cao&nbsp;cạnh&nbsp;trước:&nbsp;17 mm</li>
                                <li>Kích thước:&nbsp;310.35 x 107.8mm</li>
                                <li>PCB USB-C daughterboard</li>
                                <li>Trọng lượng: ~0.97 kg unbuild, ~1.32kg full build</li>
                            </ul>
                            <p>
                                <strong>🛠&nbsp;Kit cơ bản gồm (Người dùng cần chọn mua đủ case + PCB + Plate):</strong>
                            </p>
                            <ul>
                                <li>1x Case alu
                                    <ul>
                                        <li>Bao gồm 1 tạ ngoài tuỳ chọn</li>
                                        <li>Khi chọn mua PCB 3 mode theo kit sẽ kèm theo 2 pin&nbsp;2200 mAh</li>
                                        <li>Khi chọn mua PCB 1 mode (hotswap / solder) theo kit sẽ có 2 foam ở vị trí lắp pin</li>
                                    </ul>
                                </li>
                                <li>1x PCB Kit
                                    <ul>
                                        <li>PCB tuỳ chọn</li>
                                        <li>1x PE sheet</li>
                                        <li>1x PCB Foam</li>
                                        <li>Standoffs</li>
                                        <li>PCB 3 mode sẽ có thêm dongle&nbsp;2.4 Ghz</li>
                                    </ul>
                                </li>
                                <li>1 x Plate tuỳ chọn (với mạch hàn có thể chọn plateless)</li>
                                <li>Poron Case Foam</li>
                                <li>Daughterboard</li>
                                <li>Silicone Gaskets</li>
                                <li>O-ring (50 duro)</li>
                                <li>Ốc, feet.....</li>
                            </ul>
                            <p><strong>Quà tặng (không hỗ trợ thay thế&nbsp;đổi trả)</strong></p>
                            <ul>
                                <li>Túi đựng phím</li>
                                <li>Dây cáp&nbsp;USB Type-C</li>
                                <li>Keycap &amp; Switch puller</li>
                                <li>1 set NeoStab dành cho layout&nbsp;65% (PCB clip-in)</li
                                ><li>Tô vít…</li>
                            </ul>',
            'price' => 1290000]
        
        ];

        $images=[
            ['url' => 'product_img/neo65.png', 'imageable_id' => 1, 'imageable_type' => 'App\Models\Product']
        ];

        foreach($products as $product){
            Product::updateOrCreate($product);
        }
        
        foreach($images as $image){
            Image::updateOrCreate($image);
        }

        
    }
}
