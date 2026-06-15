<template>
  <!-- 卡片示例 -->
  <div class="tool-card">
    <div class="hook-hole"></div>
    <!-- 模拟挂钩孔 -->
    <div class="label">3D_PRINTER_MOD</div>
    <div class="content">
      <!-- <img src="your-project.jpg" /> -->
    </div>
  </div>
</template>

<style>
  .tool-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 30px;
  }

  .tool-card {
    background: white;
    padding: 15px;
    position: relative;
    border-bottom: 4px solid #bbb;
    box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.05); /* 硬投影 */
  }

  .hook-hole {
    width: 16px;
    height: 16px;
    background: #333;
    border-radius: 50%;
    margin: 0 auto 10px;
    box-shadow: inset 0 2px 4px rgba(250, 250, 250, 0.5);
  }

  .label {
    background: #1a1a1a;
    color: white;
    display: inline-block;
    padding: 2px 8px;
    font-size: 12px;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
</style>