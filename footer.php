<?php
$current_year = date ( 'Y' );
echo <<<HTML
<footer>
    <div class="footer">
    <div class="footer__wrapper">
        <div class="footer__info">
        <p>
        © 2019 - $current_year ООО "КиТО"
        </p>
        <p><a href="https://yandex.ru/maps/-/CCUEaQS-sD" target="blank">125009, г. Москва, ул.Воздвиженка 4/7, стр.2</a></p>
        </div>
        <div class="footer__info">
        <p><a href="mailto:info@kitoservices.ru">Email: info@kitoservices.ru</a></p>
        <p><a href="tel:+74956482652">Телефон: +7 (495) 648-26-52</a></p>
        </div>
    </div>
    </div>
</footer>
HTML;
?>