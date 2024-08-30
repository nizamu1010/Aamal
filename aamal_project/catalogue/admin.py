from django.contrib import admin
from .models import Category, Product

# Registering the Category model
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('cat_name',)
    search_fields = ('cat_name',)

# Registering the Product model
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('product_name', 'price', 'stock', 'is_avilable', 'category')
    list_filter = ('is_avilable', 'category')
    search_fields = ('product_name', 'description')
    list_editable = ('price', 'stock', 'is_avilable')

# Alternatively, you can register the models without decorators:
# admin.site.register(Category, CategoryAdmin)
# admin.site.register(Product, ProductAdmin)
