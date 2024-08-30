from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404
from . models import Category,Product

# Create your views here.
def catalogue(request):
    return render( request,'catalogue.html')


# Create your views here.

def products(request, category_id=None):
    categories = Category.objects.all()
    if category_id:
        # Filter products by the selected category
        category = get_object_or_404(Category, id=category_id)
        products = Product.objects.filter(category=category)
    else:
        # Show all products if no category is selected
        products = Product.objects.all()

    context = {
        'categories': categories,
        'products': products
    }
    return render(request, "products.html", context)

