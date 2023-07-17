# Generated by Django 4.2.3 on 2023-07-17 20:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Property',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('last_updated', models.DateTimeField(auto_now=True)),
                ('address', models.CharField(max_length=150)),
                ('description', models.TextField()),
                ('contract_type', models.IntegerField(choices=[(1, 'Rent'), (2, 'Sell')])),
            ],
        ),
    ]
