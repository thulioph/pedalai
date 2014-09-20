<?php include('inc/head.php') ?>

<header class="header-primary">
  <button class="btn btn-primary">Quero Pedalar</button>

  <ul class="list-actions">
    <li class="list-item">
      <a href="#" class="list-link" id="alone" title="Quero pedalar sozinho">Sozinho</a>
    </li>

    <li class="list-item">
      <a href="#" class="list-link" id="group" title="Quero pedalar em grupo">Em grupo</a>
    </li>
  </ul>
</header>


<main id="main" class="container-fluid main">
  <div class="row">
    <h2 class="col-xs-12 subtitle">Sozinho</h2>

    <ul class="col-xs-10 col-xs-offset-1 list-alone" id="list-alone">
      <li class="item-alone">
        <h3 class="title-local">Praça da Jaqueira</h3>
        <small class="distance">1,5km de distância</small>

        <figure class="icon">
          <img src="http://dummyimage.com/40x40/4d494d/686a82.gif&text=icon" alt="placeholder+image">
        </figure>
      </li>
    </ul>
  </div>
</main>


<aside class="map" id="map"></aside> <!-- Map -->


<footer class="footer-primary">
  <div class="container-fluid">
    <div class="row"></div>
  </div>
</footer>

<?php include('inc/scripts.php') ?>
