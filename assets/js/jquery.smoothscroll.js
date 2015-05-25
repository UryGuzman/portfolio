  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jquery-smooth-scrolling/jquery.smoothscroll.js at master · mathiasbynens/jquery-smooth-scrolling · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="CMaoYXAk9doiIikkbPoMicE248JlpSb38n0KsvG+hfA=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-10558550f11b1ee140f4cc119f324097a017b244.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-5f01d9908267bc69820a10a5e9a29c9a53c586c2.css" media="screen" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-898c2db1f151d566cfe6a57c33338e30b3b75033.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-633f8ca68bd2b56ddea84b8fba1a319630658542.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="0103203ca27b96f4188863cab07321bf">

        <link data-pjax-transient rel='permalink' href='/mathiasbynens/jquery-smooth-scrolling/blob/fb8b76df8cbe8e7c9b0e26bb5e999f90eb5b79fc/jquery.smoothscroll.js'>
    <meta property="og:title" content="jquery-smooth-scrolling"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/mathiasbynens/jquery-smooth-scrolling"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="Smooth anchor scrolling plugin for jQuery. Contribute to jquery-smooth-scrolling development by creating an account on GitHub."/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="mathiasbynens/jquery-smooth-scrolling"/>

    <meta name="description" content="Smooth anchor scrolling plugin for jQuery. Contribute to jquery-smooth-scrolling development by creating an account on GitHub." />

  <link href="https://github.com/mathiasbynens/jquery-smooth-scrolling/commits/master.atom" rel="alternate" title="Recent Commits to jquery-smooth-scrolling:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob windows vis-public env-production  ">
    <div id="wrapper">

      

      

      

      


        <div class="header header-logged-out">
          <div class="container clearfix">

            <a class="header-logo-wordmark" href="https://github.com/">
              <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1340659561" />
              <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1340659561" />
            </a>

              
<ul class="top-nav">
    <li class="explore"><a href="https://github.com/explore">Explore GitHub</a></li>
  <li class="search"><a href="https://github.com/search">Search</a></li>
  <li class="features"><a href="https://github.com/features">Features</a></li>
    <li class="blog"><a href="https://github.com/blog">Blog</a></li>
</ul>


            <div class="header-actions">
                <a class="button primary" href="https://github.com/signup">Sign up for free</a>
              <a class="button" href="https://github.com/login?return_to=%2Fmathiasbynens%2Fjquery-smooth-scrolling%2Fblob%2Fmaster%2Fjquery.smoothscroll.js">Sign in</a>
            </div>

          </div>
        </div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              


<ul class="pagehead-actions">



    <li>
      <a href="/login?return_to=%2Fmathiasbynens%2Fjquery-smooth-scrolling"
        class="minibutton js-toggler-target star-button entice tooltipped upwards"
        title="You must be signed in to use this feature" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>Star
      </a>
      <a class="social-count js-social-count" href="/mathiasbynens/jquery-smooth-scrolling/stargazers">
        32
      </a>
    </li>
    <li>
      <a href="/login?return_to=%2Fmathiasbynens%2Fjquery-smooth-scrolling"
        class="minibutton js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="mini-icon mini-icon-fork"></span>Fork
      </a>
      <a href="/mathiasbynens/jquery-smooth-scrolling/network" class="social-count">
        4
      </a>
    </li>
</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/mathiasbynens" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">mathiasbynens</span>
                  </a></span> /
                <strong><a href="/mathiasbynens/jquery-smooth-scrolling" class="js-current-repository">jquery-smooth-scrolling</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li><a href="/mathiasbynens/jquery-smooth-scrolling" class="selected" highlight="repo_source repo_downloads repo_commits repo_tags repo_branches">Code</a></li>
    <li><a href="/mathiasbynens/jquery-smooth-scrolling/network" highlight="repo_network">Network</a></li>
    <li><a href="/mathiasbynens/jquery-smooth-scrolling/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/mathiasbynens/jquery-smooth-scrolling/issues" highlight="repo_issues">Issues <span class='counter'>1</span></a></li>



    <li><a href="/mathiasbynens/jquery-smooth-scrolling/graphs" highlight="repo_graphs repo_contributors">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/mathiasbynens/jquery-smooth-scrolling/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter blank">0</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container js-select-menu-pane">

        <div class="select-menu-modal js-select-menu-pane">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-select-menu-text-filter js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div> <!-- /.select-menu-text-filter -->
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches" data-filterable-for="commitish-filter-field" data-filterable-type="substring">


              <div class="select-menu-item js-navigation-item js-navigation-target selected">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/mathiasbynens/jquery-smooth-scrolling/blob/master/jquery.smoothscroll.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-no-results js-not-filterable">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags" data-filterable-for="commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-no-results js-not-filterable">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/mathiasbynens/jquery-smooth-scrolling" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/mathiasbynens/jquery-smooth-scrolling/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/mathiasbynens/jquery-smooth-scrolling/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">1</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:b598e450aad0abeb20014724f93f8dd6 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:b598e450aad0abeb20014724f93f8dd6 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mathiasbynens/jquery-smooth-scrolling" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">jquery-smooth-scrolling</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.smoothscroll.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="jquery.smoothscroll.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/mathiasbynens/jquery-smooth-scrolling/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/mathiasbynens" rel="author">mathiasbynens</a></span>
    <time class="js-relative-date" datetime="2011-07-26T00:46:52-07:00" title="2011-07-26 00:46:52">July 26, 2011</time>
    <div class="commit-title">
        <a href="/mathiasbynens/jquery-smooth-scrolling/commit/13a163ec22ab475fe2b2c836a7bf3479646fedce" class="message">Cache `element.hash`.</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/mathiasbynens">mathiasbynens</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/mathiasbynens/jquery-smooth-scrolling/blob/fb8b76df8cbe8e7c9b0e26bb5e999f90eb5b79fc/jquery.smoothscroll.js" data-title="jquery-smooth-scrolling/jquery.smoothscroll.js at master · mathiasbynens/jquery-smooth-scrolling · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>44 lines (41 sloc)</span>
                <span>1.473 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                      <a class="minibutton js-entice" href=""
                         data-entice="You must be signed in and on a branch to make or propose changes">Edit</a>
                  <a href="/mathiasbynens/jquery-smooth-scrolling/raw/master/jquery.smoothscroll.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/mathiasbynens/jquery-smooth-scrolling/blame/master/jquery.smoothscroll.js" class="button minibutton ">Blame</a>
                  <a href="/mathiasbynens/jquery-smooth-scrolling/commits/master/jquery.smoothscroll.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="data type-javascript js-blob-data">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
</pre>
          </td>
          <td width="100%">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*! http://mths.be/smoothscroll v1.5.2 by @mathias */</span></div><div class='line' id='LC2'><span class="p">;(</span><span class="kd">function</span><span class="p">(</span><span class="nb">document</span><span class="p">,</span> <span class="nx">$</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3'><br/></div><div class='line' id='LC4'>	<span class="kd">var</span> <span class="nx">$scrollElement</span> <span class="o">=</span> <span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC5'>	    <span class="c1">// Find out what to scroll (html or body)</span></div><div class='line' id='LC6'>	    	<span class="kd">var</span> <span class="nx">$html</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">),</span></div><div class='line' id='LC7'>	    	    <span class="nx">$body</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">),</span></div><div class='line' id='LC8'>	    	    <span class="nx">bodyScrollTop</span><span class="p">;</span></div><div class='line' id='LC9'>	    	<span class="k">if</span> <span class="p">(</span><span class="nx">$html</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC10'>	    		<span class="k">return</span> <span class="nx">$html</span><span class="p">;</span></div><div class='line' id='LC11'>	    	<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC12'>	    		<span class="nx">bodyScrollTop</span> <span class="o">=</span> <span class="nx">$body</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">();</span></div><div class='line' id='LC13'>	    		<span class="c1">// If scrolling the body doesn’t do anything</span></div><div class='line' id='LC14'>	    		<span class="k">if</span> <span class="p">(</span><span class="nx">$body</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">(</span><span class="nx">bodyScrollTop</span> <span class="o">+</span> <span class="mi">1</span><span class="p">).</span><span class="nx">scrollTop</span><span class="p">()</span> <span class="o">==</span> <span class="nx">bodyScrollTop</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC15'>	    			<span class="k">return</span> <span class="nx">$html</span><span class="p">;</span></div><div class='line' id='LC16'>	    		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC17'>	    			<span class="c1">// We actually scrolled, so undo it</span></div><div class='line' id='LC18'>	    			<span class="k">return</span> <span class="nx">$body</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">(</span><span class="nx">bodyScrollTop</span><span class="p">);</span></div><div class='line' id='LC19'>	    		<span class="p">}</span></div><div class='line' id='LC20'>	    	<span class="p">}</span></div><div class='line' id='LC21'>	    <span class="p">}());</span></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">smoothScroll</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">speed</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC24'>		<span class="nx">speed</span> <span class="o">=</span> <span class="o">~~</span><span class="nx">speed</span> <span class="o">||</span> <span class="mi">400</span><span class="p">;</span></div><div class='line' id='LC25'>		<span class="c1">// Look for links to anchors (on any page)</span></div><div class='line' id='LC26'>		<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;a[href*=&quot;#&quot;]&#39;</span><span class="p">).</span><span class="nx">click</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC27'>			<span class="kd">var</span> <span class="nx">hash</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">hash</span><span class="p">,</span></div><div class='line' id='LC28'>			    <span class="nx">$hash</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">hash</span><span class="p">);</span> <span class="c1">// The in-document element the link points to</span></div><div class='line' id='LC29'>			<span class="c1">// If it’s a link to an anchor in the same document</span></div><div class='line' id='LC30'>			<span class="k">if</span> <span class="p">(</span><span class="nx">location</span><span class="p">.</span><span class="nx">pathname</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^\//</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="o">===</span> <span class="k">this</span><span class="p">.</span><span class="nx">pathname</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^\//</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">location</span><span class="p">.</span><span class="nx">hostname</span> <span class="o">===</span> <span class="k">this</span><span class="p">.</span><span class="nx">hostname</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC31'>				<span class="c1">// If the anchor actually exists…</span></div><div class='line' id='LC32'>				<span class="k">if</span> <span class="p">(</span><span class="nx">$hash</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC33'>					<span class="c1">// …don’t jump to the link right away…</span></div><div class='line' id='LC34'>					<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC35'>					<span class="c1">// …and smoothly scroll to it</span></div><div class='line' id='LC36'>					<span class="nx">$scrollElement</span><span class="p">.</span><span class="nx">stop</span><span class="p">().</span><span class="nx">animate</span><span class="p">({</span> <span class="s1">&#39;scrollTop&#39;</span><span class="o">:</span> <span class="nx">$hash</span><span class="p">.</span><span class="nx">offset</span><span class="p">().</span><span class="nx">top</span> <span class="p">},</span> <span class="nx">speed</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC37'>						<span class="nx">location</span><span class="p">.</span><span class="nx">hash</span> <span class="o">=</span> <span class="nx">hash</span><span class="p">;</span></div><div class='line' id='LC38'>					<span class="p">});</span></div><div class='line' id='LC39'>				<span class="p">}</span></div><div class='line' id='LC40'>			<span class="p">}</span></div><div class='line' id='LC41'>		<span class="p">}).</span><span class="nx">end</span><span class="p">();</span></div><div class='line' id='LC42'>	<span class="p">};</span></div><div class='line' id='LC43'><br/></div><div class='line' id='LC44'><span class="p">}(</span><span class="nb">document</span><span class="p">,</span> <span class="nx">jQuery</span><span class="p">));</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543527" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.07214s from fe18.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/mathiasbynens/jquery-smooth-scrolling/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.07255' data-host='fe18'></span>
    
  </body>
</html>

